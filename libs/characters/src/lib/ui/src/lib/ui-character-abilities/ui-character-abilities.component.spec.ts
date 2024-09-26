import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCharacterAbilitiesComponent } from './ui-character-abilities.component';

describe('UiCharacterStatsComponent', () => {
  let component: UiCharacterAbilitiesComponent;
  let fixture: ComponentFixture<UiCharacterAbilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCharacterAbilitiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCharacterAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
