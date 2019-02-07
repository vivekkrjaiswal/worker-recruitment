import { NgModule } from '@angular/core';

import { WorkerrecruitmentSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WorkerrecruitmentSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WorkerrecruitmentSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WorkerrecruitmentSharedCommonModule {}
