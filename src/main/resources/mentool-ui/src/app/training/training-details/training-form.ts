import {FormControl, FormGroup, Validators} from "@angular/forms";

export class TrainingForm extends FormGroup{
  constructor() {
    super({
      trainingId: new FormControl(''),
      skillName: new FormControl('', [Validators.required]),
      facilitiesDesc: new FormControl('', [Validators.required]),
      prerequisitesDesc: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      noOfTrainingsDone: new FormControl(0, [Validators.required, Validators.pattern("[0-9]")]),
      mentorName: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      fee: new FormControl(0, [Validators.required]),
      traineesBooked: new FormControl([])

    });
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

  public getTrainingId(): string {
    return this.get('trainingId').value;
  }

  public getTraineesBooked(): Array<string> {
    return this.get('traineesBooked').value;
  }
}
