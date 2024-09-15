import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerCharactersListComponent } from './container-characters-list.component';

describe('CharactersUiComponent', () => {
  let component: ContainerCharactersListComponent;
  let fixture: ComponentFixture<ContainerCharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCharactersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerCharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
