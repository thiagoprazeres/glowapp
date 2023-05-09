import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarEnderecoPage } from './confirmar-endereco.page';

describe('ConfirmarEnderecoPage', () => {
  let component: ConfirmarEnderecoPage;
  let fixture: ComponentFixture<ConfirmarEnderecoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarEnderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
