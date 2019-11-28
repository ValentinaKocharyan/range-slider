import {
  Component, Input, Output, EventEmitter,
  ElementRef, OnInit, HostListener, SimpleChanges, OnChanges
} from '@angular/core';
import {Utilities} from './utilities';
import {SliderHandlerEnum} from './slider-handler.enum';

@Component({
  selector: 'npn-slider',
  templateUrl: './npn-slider.component.html',
  styleUrls: ['./npn-slider.component.css']
})
export class NpnSliderComponent extends Utilities implements OnInit, OnChanges {
  private sliderModel = [0, 0, 0];
  public handlerX: number[] = [0, 0];
  private totalDiff = 0;
  private startPleft = 0;
  private startPRight = 0;
  public currentHandlerIndex = 0;
  private startClientX = 0;
  public isTouchEventStart = false;
  public isHandlerActive = false;
  public isMouseEventStart = false;
  public initValues: number[] = [];
  private minValue: number;
  private maxValue: number;
  public currentValues: number[] = [0, 0];
  public hideTooltip = false;
  public hideValues = false;
  private minSelected: number;
  private maxSelected: number;

  private step = 1;
  private sliderInitiated = false;
  public stepIndicatorPositions = [];
  private sliderWidth = 0;

  public handlerXArr: number[][] = [[0, 20], [40, 100]];
  private sliderModelArr: number[][] = [[0, 0, 0], [0, 0, 0]];
  private totalDiffArr: number[] = [0, 0];
  private startPleftArr: number[] = [0, 0];
  private startPRightArr: number[] = [0, 0];
  public currentHandlerIndexArr: number[] = [0, 0];
  private startClientXArr: number[] = [0, 0];
  public isTouchEventStartArr: boolean[] = [false, false];
  public isHandlerActiveArr: boolean[] = [false, false];
  public isMouseEventStartArr: boolean[] = [false, false];
  public initValuesArr: number[][] = [[], []];
  private minValueArr: number[] = [];
  private maxValueArr: number[] = [];
  public currentValuesArr: number[][] = [[0, 0], [0, 0]];
  public hideTooltipArr = [false, false];
  public hideValuesArr = [false, false];
  private minSelectedArr: number[] = [];
  private maxSelectedArr: number[] = [];

  public handlerIndex = SliderHandlerEnum;

  constructor(private el: ElementRef) {
    super();
  }

  @Input('min')
  set setMinValues(value: number) {
    if (!isNaN(value)) {
      for (let j = 0; j < this.handlerXArr.length; j++) {
        this.minValueArr[j] = Number(value);
      }
    }
  }

  @Input('max')
  set setMaxValues(value: number) {
    if (!isNaN(value)) {
      for (let j = 0; j < this.handlerXArr.length; j++) {
        this.maxValueArr[j] = Number(value);
      }
    }
  }

  @Input('minSelected')
  set setMinSelectedValues(value: number) {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      if (!isNaN(value) && this.minSelectedArr[j] !== Number(value)) {
        this.minSelectedArr[j] = Number(value);
      }
    }
  }

  @Input('maxSelected')
  set setMaxSelectedValues(value: number) {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      if (!isNaN(value) && this.maxSelectedArr[j] !== Number(value)) {
        this.maxSelectedArr[j] = Number(value);
      }
    }
  }

  @Input('step')
  set stepValue(value: number) {
    if (!isNaN(value)) {
      this.step = Number(value);
    }
  }

  @Input() showStepIndicator = false;
  @Input() multiRange = true;

  @Input('hide-tooltip')
  set setHideTooltip(value: boolean) {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      this.hideTooltipArr[j] = this.toBoolean(value);
    }
  }

  @Input('hide-values')
  set setHideValues(value: boolean) {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      this.hideValuesArr[j] = this.toBoolean(value);
    }
  }

  /*@Input('disabled')
  set setDisabled(value: string) {
    this.isDisabled = this.toBoolean(value, 'disabled');
  }*/

  @Output() onChange = new EventEmitter<number[]>();

  ngOnInit() {
    this.initializeSlider();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.sliderInitiated) {
      if (!this.isNullOrEmpty(changes.setMinSelectedValues)
        && changes.setMinSelectedValues.previousValue === changes.setMinSelectedValues.currentValue) {
        return;
      }
      if (!this.isNullOrEmpty(changes.setMaxSelectedValues)
        && changes.setMaxSelectedValues.previousValue === changes.setMaxSelectedValues.currentValue) {
        return;
      }
      this.resetModel();
    }
  }

  /*Method to initailize entire Slider*/
  public initializeSlider() {
    try {
      // Taking width of slider bar element.
      this.sliderWidth = this.el.nativeElement.children[0].children[0].offsetWidth;
      this.resetModel();
      this.sliderInitiated = true;
    } catch (e) {
      console.error(e);
    }
  }

  /*Method to initialize variables and model values */
  private resetModel() {
    this.validateSliderValues();
    // Setting the model values
    for (let j = 0; j < this.handlerXArr.length; j++) {
      this.sliderModelArr[j] = [
        this.currentValuesArr[j][0] - this.initValuesArr[j][0],
        this.currentValuesArr[j][1] - this.currentValuesArr[j][0],
        this.initValuesArr[j][1] - this.currentValuesArr[j][1]
      ];
      this.totalDiffArr[j] = this.sliderModelArr[j].reduce((prevValue, curValue) => prevValue + curValue, 0);
      this.setHandlerPosition(j);
    }

    // Validation for slider step
    /* if (this.totalDiff % this.step !== 0) {
       const newStep = this.findNextValidStepValue(this.totalDiff, this.step);
       console.warn('Invalid step value "' + this.step + '" : and took "' + newStep + '" as default step');
       this.step = newStep;
     }*/
    /*this.initializeStepIndicator();*/
  }

  /*Method to do validation of init and seleted range values*/
  private validateSliderValues() {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      if (this.isNullOrEmpty(this.minValueArr[j]) || this.isNullOrEmpty(this.maxValueArr[j])) {
        this.updateInitValues([[0, 0], [0, 0]]);
        this.updateCurrentValue([0, 0], true);
      } else if (this.minValueArr[j] > this.maxValueArr[j]) {
        this.updateInitValues([[0, 0], [0, 0]]);
        this.updateCurrentValue([0, 0], true);
      } else {
        this.initValuesArr[j] = [this.minValueArr[j], this.maxValueArr[j]];
        /*
        * Validation for Selected range values
        */
        if (this.isNullOrEmpty(this.minSelectedArr[j]) || this.minSelectedArr[j] < this.minValueArr[j] || this.minSelectedArr[j] > this.maxValueArr[j]) {
          this.minSelectedArr[j] = this.minValueArr[j];
        }
        if (this.isNullOrEmpty(this.maxSelectedArr[j]) || this.maxSelectedArr[j] < this.minValueArr[j] || this.maxSelectedArr[j] > this.maxValueArr[j]) {
          this.maxSelectedArr[j] = this.maxValueArr[j];
        }
        if (this.minSelectedArr[j] > this.maxSelectedArr[j]) {
          this.minSelectedArr[j] = this.minValueArr[j];
          this.maxSelectedArr[j] = this.maxValueArr[j];
        }
        this.updateCurrentValue([this.minSelectedArr[j], this.maxSelectedArr[j]], true);
      }
    }
  }

  /*Method to add step inidicator to slider */
  /*private initializeStepIndicator() {
    if (this.showStepIndicator) {
      this.stepIndicatorPositions.length = 0;
      const numOfStepIndicators = this.totalDiff / this.step;
      if (this.sliderWidth / numOfStepIndicators >= 10) {
        const increment = this.sliderWidth / numOfStepIndicators;
        let leftPosition = increment;
        while (this.stepIndicatorPositions.length < numOfStepIndicators - 1) {
          this.stepIndicatorPositions.push(+leftPosition.toFixed(2));
          leftPosition += increment;
        }
      } else {
        console.warn(`As 'step' value is too small compared to min & max value difference and slider width,
          Step Indicator can't be displayed!. Provide slight large value for 'step'`);
      }
    } else {
      this.stepIndicatorPositions.length = 0;
    }
  }*/

  /*Method to set current selected values */
  private updateCurrentValue(arrayValue: number[], privateChange: boolean = false) {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      this.minSelectedArr[j] = this.currentValuesArr[j][0] = arrayValue[0];
      this.minSelectedArr[j] = this.currentValuesArr[j][1] = arrayValue[1];
      if (!privateChange) {
        this.onChange.emit(this.currentValuesArr[j]);
      }
    }
  }

  /*Method to set current selected values */
  private updateInitValues(arrayValue: number[][]) {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      this.minValueArr[j] = this.initValuesArr[j][0] = arrayValue[j][0];
      this.maxValueArr[j] = this.initValuesArr[j][1] = arrayValue[j][1];
    }
  }

  /*Method to set handler position */
  private setHandlerPosition(index = 0) {
    let runningTotal = 0;

      // Updating selected values : current values
      this.updateCurrentValue([
        this.initValuesArr[index][0] + this.sliderModelArr[index][0],
        this.initValuesArr[index][1] - this.sliderModelArr[index][2]
      ]);
      /*Setting handler position */
      for (let i = 0, len = this.sliderModelArr[index].length - 1; i < len; i++) {
        runningTotal += this.sliderModelArr[index][i];
        this.handlerXArr[index][i] = (runningTotal / this.totalDiffArr[index]) * 100;
        console.log(this.handlerXArr[index][i], index, i);
      }
  }

  /*Method to set model array values - will try to refine the values using step */
  private setModelValue(index: number, value: number, hendlerIndex) {
    if (this.step > 1) {
      value = Math.round(value / this.step) * this.step;
    }
    this.sliderModelArr[hendlerIndex][index] = value;
  }

  /*Method to disable handler movement*/

  /*Execute on events:
  * on-mouseup
  * on-panend
  */
  @HostListener('document:mouseup')
  @HostListener('document:panend')
  setHandlerActiveOff() {
    for (let j = 0; j < this.handlerXArr.length; j++) {
      this.isMouseEventStartArr[j] = false;
      this.isTouchEventStartArr[j] = false;
      this.isHandlerActiveArr[j] = false;
    }
  }

  /*Method to detect start draging handler*/

  /*Execute on events:
  * on-mousedown
  * on-panstart
  */
  public setHandlerActive(event: any, handlerIndex: number) {
    event.preventDefault();
    for (let j = 0; j < this.handlerXArr.length; j++) {
      if (!this.isNullOrEmpty(event.clientX)) {
        this.startClientXArr[j] = event.clientX;
        this.isMouseEventStartArr[j] = true;
        this.isTouchEventStartArr[j] = false;
      } else if (!this.isNullOrEmpty(event.deltaX)) {
        this.startClientXArr[j] = event.deltaX;
        this.isTouchEventStartArr[j] = true;
        this.isMouseEventStartArr[j] = false;
      }
      if (this.isMouseEventStartArr[j] || this.isTouchEventStartArr[j]) {
        this.currentHandlerIndexArr[j] = handlerIndex;
        this.startPleftArr[j] = this.sliderModelArr[j][handlerIndex];
        this.startPRightArr[j] = this.sliderModelArr[j][handlerIndex + 1];
        this.isHandlerActiveArr[j] = true;
      }
    }
  }


  /*Method to calculate silder handler movement */

  /*Execute on events:
  * on-mousemove
  * on-panmove
  */
  public handlerSliding(event: any) {
   const clientX = event.clientX;
    console.log(event);
    for (let j = 0; j < this.handlerXArr.length; j++) {
      const deltaX = event.deltaX;

      if ((this.isMouseEventStartArr[j] && clientX) || (this.isTouchEventStartArr[j] && deltaX)) {
        const movedX = Math.round(((clientX || deltaX) - this.startClientXArr[j]) / this.sliderWidth * this.totalDiffArr[j]);
        const nextPLeft = this.startPleftArr[j] + movedX;
        const nextPRight = this.startPRightArr[j] - movedX;
        if (nextPLeft >= 0 && nextPRight >= 0) {
          this.setModelValue(this.currentHandlerIndexArr[j], nextPLeft, j);
          this.setModelValue(this.currentHandlerIndexArr[j] + 1, nextPRight, j);
          this.setHandlerPosition(j);
        }
      }
    }
  }
}
