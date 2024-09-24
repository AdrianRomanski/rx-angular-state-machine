import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCharacterStatsComponent } from './ui-character-stats.component';

describe('UiCharacterStatsComponent', () => {
  let component: UiCharacterStatsComponent;
  let fixture: ComponentFixture<UiCharacterStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCharacterStatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCharacterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
