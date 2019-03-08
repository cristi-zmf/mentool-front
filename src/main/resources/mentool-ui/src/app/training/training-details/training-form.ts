import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Skill} from "../../skill/skill";
import {DateValidators} from "../../shared/date.validators";


let dateValidators = [];
dateValidators.push(DateValidators.dateAfterEqualOrAfterCurrentDate('startDate', {'beforeCurrentDate': true}));
dateValidators.push(DateValidators.dateLessThan('startDate', 'endDate', {'lessThanStartDate': true}));
export class TrainingForm extends FormGroup {
  constructor() {
    super({
      trainingId: new FormControl(''),
      skillName: new FormControl(''),
      skillId: new FormControl(''),
      facilitiesDesc: new FormControl('', [Validators.required]),
      prerequisitesDesc: new FormControl('', [Validators.required]),
      emailAddress: new FormControl(''),
      noOfTrainingsDone: new FormControl(0, [Validators.required, Validators.pattern("[0-9]{1,20}")]),
      mentorName: new FormControl(''),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
      fee: new FormControl(0, [Validators.required]),
      traineesBooked: new FormControl([])
    }, dateValidators);
  }

  setFormFromDto(trainingData: any) {
    this.patchValue({
      trainingId: trainingData.trainingId,
      skillName: trainingData.skillName,
      facilitiesDesc: trainingData.facilitiesDesc,
      prerequisitesDesc: trainingData.prerequisitesDesc,
      emailAddress: trainingData.emailAddress,
      noOfTrainingsDone: trainingData.noOfTrainingsDone,
      mentorName: trainingData.mentorName,
      startDate: trainingData.startDate,
      endDate: trainingData.endDate,
      fee: trainingData.fee,
      traineesBooked: trainingData.traineesBooked
    })
  }

  toCreationDto(): any {
    return {
      skillId: this.get('skillId').value,
      facilitiesDesc: this.get('facilitiesDesc').value,
      emailAddress: this.get('emailAddress').value,
      prerequisitesDesc: this.get('prerequisitesDesc').value,
      noOfTrainingsDone: this.get('noOfTrainingsDone').value,
      startDate: this.get('startDate').value,
      endDate: this.get('endDate').value,
      fee: this.get('fee').value
    };
  }

  public getTrainingId(): string {
    return this.get('trainingId').value;
  }

  public getTraineesBooked(): Array<string> {
    return this.get('traineesBooked').value;
  }

  public updateSkillField(skill: Skill) {
    if (skill){
      this.patchValue({
        skillId: skill.id
      });
    }
  }

  updateStartDate(date: any) {
    this.patchValue({
      startDate: date
    });
  }

  updateEndDate(date: any) {
    this.patchValue({
      endDate: date
    });
  }

  updateMentorEmail(email: any) {
    this.patchValue({
      emailAddress: email
    });
  }

  shouldShowErrorForStartDate(): boolean {
    return this.shouldShowErrorForDateValidators(this.get('startDate'));
  }

  shouldShowErrorForEndDate(): boolean {
    return this.shouldShowErrorForDateValidators(this.get('endDate'));
  }

  private shouldShowErrorForDateValidators(form: AbstractControl): boolean {
    return form.dirty || form.touched;
  }
}
