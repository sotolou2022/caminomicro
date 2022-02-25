import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'caminomicroApp.caminomicroRegion.home.title' },
        loadChildren: () => import('./caminomicro/region/region.module').then(m => m.CaminomicroRegionModule),
      },
      {
        path: 'country',
        data: { pageTitle: 'caminomicroApp.caminomicroCountry.home.title' },
        loadChildren: () => import('./caminomicro/country/country.module').then(m => m.CaminomicroCountryModule),
      },
      {
        path: 'location',
        data: { pageTitle: 'caminomicroApp.caminomicroLocation.home.title' },
        loadChildren: () => import('./caminomicro/location/location.module').then(m => m.CaminomicroLocationModule),
      },
      {
        path: 'department',
        data: { pageTitle: 'caminomicroApp.caminomicroDepartment.home.title' },
        loadChildren: () => import('./caminomicro/department/department.module').then(m => m.CaminomicroDepartmentModule),
      },
      {
        path: 'task',
        data: { pageTitle: 'caminomicroApp.caminomicroTask.home.title' },
        loadChildren: () => import('./caminomicro/task/task.module').then(m => m.CaminomicroTaskModule),
      },
      {
        path: 'employee',
        data: { pageTitle: 'caminomicroApp.caminomicroEmployee.home.title' },
        loadChildren: () => import('./caminomicro/employee/employee.module').then(m => m.CaminomicroEmployeeModule),
      },
      {
        path: 'job',
        data: { pageTitle: 'caminomicroApp.caminomicroJob.home.title' },
        loadChildren: () => import('./caminomicro/job/job.module').then(m => m.CaminomicroJobModule),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'caminomicroApp.caminomicroJobHistory.home.title' },
        loadChildren: () => import('./caminomicro/job-history/job-history.module').then(m => m.CaminomicroJobHistoryModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
