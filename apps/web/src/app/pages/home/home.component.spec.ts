import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Thought } from '@cust/thoughts';
import { HomeComponent } from './home.component';

const mockedThought = {
  text: 'test1',
  author: 'test1',
};

function mockedGetResolvedRouteData(): Thought {
  return mockedThought;
}

jest.mock('../../functions/get-resolved-route-data', () => ({
  getResolvedRouteData: mockedGetResolvedRouteData
}));

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {

    await TestBed
      .configureTestingModule({
        imports: [HomeComponent]
      })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have data at the thought property', () => {
    expect(component.thought).toEqual(mockedThought);
  });
});
