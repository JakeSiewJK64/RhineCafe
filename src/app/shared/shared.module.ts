import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { CovalentModule } from './covalent.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MaterialModule,
        CovalentModule,
        FlexLayoutModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        CovalentModule,
    ]
})
export class SharedModule { }
