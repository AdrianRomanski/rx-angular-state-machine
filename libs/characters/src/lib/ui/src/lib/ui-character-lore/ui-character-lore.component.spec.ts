import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiCharacterLoreComponent } from './ui-character-lore.component';

describe('UiCharacterStatsComponent', () => {
  let component: UiCharacterLoreComponent;
  let fixture: ComponentFixture<UiCharacterLoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiCharacterLoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiCharacterLoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
