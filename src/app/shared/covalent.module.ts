import { NgModule } from '@angular/core';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentDataTableModule } from '@covalent/core/data-table';
import { CovalentMediaModule } from '@covalent/core/media';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentNotificationsModule } from '@covalent/core/notifications';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentMenuModule } from '@covalent/core/menu';
import { CovalentPagingModule } from '@covalent/core/paging';
import { CovalentSearchModule } from '@covalent/core/search';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentExpansionPanelModule } from '@covalent/core/expansion-panel';
import { CovalentMessageModule } from '@covalent/core/message';
import { CovalentBreadcrumbsModule } from '@covalent/core/breadcrumbs';


const COVALENT_MODULES: any[] = [
    CovalentDataTableModule, CovalentMediaModule, CovalentLoadingModule,
    CovalentNotificationsModule, CovalentLayoutModule, CovalentMenuModule,
    CovalentPagingModule, CovalentSearchModule, CovalentStepsModule,
    CovalentCommonModule, CovalentDialogsModule, CovalentExpansionPanelModule,
    CovalentMessageModule, CovalentBreadcrumbsModule
];

@NgModule({
    declarations: [],
    imports: [
        COVALENT_MODULES

    ],

    exports: [
        COVALENT_MODULES
    ]
})
export class CovalentModule { }
