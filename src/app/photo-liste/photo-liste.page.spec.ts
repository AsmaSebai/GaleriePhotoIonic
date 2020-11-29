import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PhotoListePage } from './photo-liste.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('PhotoListePage', () => {
  let component: PhotoListePage;
  let fixture: ComponentFixture<PhotoListePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoListePage ],
      providers: [],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListePage);
 
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show three items', async () => {
    component.currentPage=2
    component.size=20
console.log(component.size);
component.ngOnInit()
    const value = component.photo;
    expect(value).toBeDefined;
});

});
