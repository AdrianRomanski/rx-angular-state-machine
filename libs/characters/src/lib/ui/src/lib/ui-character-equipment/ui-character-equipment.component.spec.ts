import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCharacterEquipmentComponent } from './ui-character-equipment.component';

describe('UiCharacterStatsComponent', () => {
  let component: UiCharacterEquipmentComponent;
  let fixture: ComponentFixture<UiCharacterEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCharacterEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCharacterEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
