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
      endDate: new FormControl('', [Validators.required])
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
      endDate: trainingData.endDate
    })
  }
}