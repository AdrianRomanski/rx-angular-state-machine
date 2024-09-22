import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersUiComponent } from './ui-card.component';

describe('CharactersUiComponent', () => {
  let component: CharactersUiComponent;
  let fixture: ComponentFixture<CharactersUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
