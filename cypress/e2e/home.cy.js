// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('Login Page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/');
  });

  it('should login with valid credentials', () => {
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Login Successful!')
    });
  });

  it('should display error message if wrong credentials', () => {
    //Arrange
    cy.get('#email').type('test@examples.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.get('#error-message').should('contain', 'Invalid email or password')
  });
});

