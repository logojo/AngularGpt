import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-item',
  imports: [
    RouterModule
  ],
  template: `
  <a    
    [routerLink]="[path]"
    routerLinkActive="bg-gray-800"
    class="flex items-center justify-center rounded-md hover:bg-gray-800 p-2 transition-colors"
  >
    <i class="{{ icon }} text-xl mr-4 text-indigo-400"></i>
    <div class="flex flex-col flex-grow">
      <span class="text-white text-sm font-semibold">{{ title }}</span>
      <span class="text-gray-400 text-xs">{{ description }}</span>
    </div>
  </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuItemComponent { 

  @Input({ required: true}) icon!: string;
  @Input({ required: true}) title!: string;
  @Input({ required: true}) description!: string;
  @Input({ required: true}) path!: string;
}
