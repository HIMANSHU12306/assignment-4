import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDirectiveComponent } from './s-directive.component';

describe('SDirectiveComponent', () => {
  let component: SDirectiveComponent;
  let fixture: ComponentFixture<SDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
