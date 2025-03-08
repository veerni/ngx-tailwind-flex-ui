// apps/playground/src/app/components/icon-demo/icon-demo.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconDemoComponent } from './icon-demo.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@ngx-tailwind-flex-ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('IconDemoComponent', () => {
  let component: IconDemoComponent;
  let fixture: ComponentFixture<IconDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, IconDemoComponent, IconComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default selected icon set to "home"', () => {
    expect(component.selectedIcon).toBe('home');
  });

  it('should update selectedIcon when selectIcon is called', () => {
    component.selectIcon('star');
    expect(component.selectedIcon).toBe('star');
  });

  it('should toggle animation state', () => {
    expect(component.animatedIcon).toBeFalsy();
    component.toggleAnimation();
    expect(component.animatedIcon).toBeTruthy();
    component.toggleAnimation();
    expect(component.animatedIcon).toBeFalsy();
  });

  it('should contain all color options', () => {
    expect(component.colorOptions.length).toBeGreaterThan(0);
    expect(component.colorOptions[0].name).toBe('Default');
    expect(component.colorOptions[0].class).toBe('text-gray-500');
  });

  it('should have icon categories defined', () => {
    expect(component.iconCategories.length).toBeGreaterThan(0);
    expect(component.iconCategories[0].name).toBeDefined();
    expect(component.iconCategories[0].icons.length).toBeGreaterThan(0);
  });
});
