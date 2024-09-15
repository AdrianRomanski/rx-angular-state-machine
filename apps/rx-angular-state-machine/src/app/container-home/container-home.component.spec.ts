import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerHomeComponent } from './container-home.component';

describe('HomeComponent', () => {
  let component: ContainerHomeComponent;
  let fixture: ComponentFixture<ContainerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
