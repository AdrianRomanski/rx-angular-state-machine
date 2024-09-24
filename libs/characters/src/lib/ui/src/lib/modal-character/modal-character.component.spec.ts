import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCharacterComponent } from './modal-character.component';

describe('ModalCharacterComponent', () => {
  let component: ModalCharacterComponent;
  let fixture: ComponentFixture<ModalCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
