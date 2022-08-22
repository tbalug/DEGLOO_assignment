context('Flask Dashboard page - Header', () => {
  beforeEach(() => {
    cy.visit("https://flask.io")
  })

  it('Successfully loads', () => {
   
  })

  it('Check for the header', () => {
    cy.get('.home-header > .container')
    .should('be.visible')
   })

  it('Check for the logo', () => {
   cy.get('.logo')
   .should('be.visible')
  })

  it ('Open log in page', () => {
    cy.get('.btn-tertiary')
    .should('be.visible')
    .click()

})
})

context('Flask Dashboard page - Home hero part', () => {
  beforeEach(() => {
    cy.visit("https://flask.io")
  })

it('Check for home hero part', () => {
  cy.get('.home-hero')
  .should('be.visible')
 })

it ('Check for the h1', () => {
  cy.get('h1')
  .should('be.visible')
})

it ('Open "Create a to-do list"', () => {
  cy.get('.btn-primary')
  .should('be.visible')
  .click()
})

it ('Check for the "No sign up required" notification', () => {
  cy.get('.span6 > :nth-child(3)')
  .should('be.visible')
})

it ('Check for the hero image', () => {
  cy.get('.hero-image')
  .should('be.visible')
})

})

context('Flask Dashboard page - Home feature', () => {
  beforeEach(() => {
    cy.visit("https://flask.io")
  })

it ('Check for the "Home feature" element', () => {
  cy.get('.home-feature')
  .should('be.visible')
})

it ('Check for the home feature text 1', () => {
  cy.get(':nth-child(1) > h2')
  .should('be.visible')
})

it ('Check for the home feature text 2', () => {
  cy.get('.home-feature > .container > :nth-child(1) > p')
  .should('be.visible')
})

it ('Check for the home feature text 3', () => {
  cy.get(':nth-child(2) > h2')
  .should('be.visible')
})

it ('Check for the home feature text 4', () => {
  cy.get(':nth-child(2) > p')
  .should('be.visible')
})

it ('Check for the home feature text 5', () => {
  cy.get('.last > h2')
  .should('be.visible')
})

it ('Check for the home feature text 6', () => {
  cy.get('.last > p')
  .should('be.visible')
})

})

context('Flask Dashboard page - Home customers', () => {
  beforeEach(() => {
    cy.visit("https://flask.io")
  })

it ('Check for the "Home customers" elements' , () => {
  cy.get('.home-customers')
  .should('be.visible')
})

it ('Check for the 1st quoute' , () => {
  cy.get(':nth-child(1) > .quote-icon > .icon-quote-left')
  .should('be.visible')
})

it ('Check for the 1st "Home customers" text' , () => {
  cy.get(':nth-child(1) > blockquote')
  .should('be.visible')
})

it ('Check for the 2st quoute' , () => {
  cy.get(':nth-child(2) > .quote-icon > .icon-quote-left')
  .should('be.visible')
})

it ('Check for the 2st "Home customers" text' , () => {
  cy.get(':nth-child(2) > blockquote')
  .should('be.visible')
})

it ('Check for the 3st quoute' , () => {
  cy.get('.last > .quote-icon > .icon-quote-left')
  .should('be.visible')
})

it ('Check for the 3st "Home customers" text' , () => {
  cy.get('.last > blockquote')
  .should('be.visible')
})

})

context('Flask Dashboard page - Home social', () => {
  beforeEach(() => {
    cy.visit("https://flask.io")
  })

  it ('Check for the Home social section' , () => {
    cy.get('.home-social')
    .should('be.visible')
  })

  it ('Check for the lifehacker' , () => {
    cy.get(':nth-child(1) > a > img')
    .should('be.visible')
  })

  it ('Check for the lifehacker URL' , () => {
   cy.get('.home-social > .container > :nth-child(1) > a')
   .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('https://lifehacker.com/flask-creates-shareable-to-do-lists-on-the-fly-no-acco-510290685')
      });
})

it ('Check for the addictivetips' , () => {
  cy.get('.container > :nth-child(2) > a > img')
  .should('be.visible')
})

it ('Check for the addictivetips URL' , () => {
  cy.get('.home-social > .container > :nth-child(2) > a')
  .invoke('attr', 'href')
      .then(href => {
        expect(href).to.equal('http://www.addictivetips.com/web/flask-desktop-mobile-to-do-web-app-that-doesnt-need-an-account/')
      });
})

it ('Check for the appstorm ' , () => {
  cy.get('.last > a > img')
  .should('be.visible')
})

it ('Check for the appstorm URL' , () => {
  cy.get('.last > a')
  .invoke('attr', 'href')
  .then(href => {
    expect(href).to.equal('https://twitter.com/webappstorm/status/305974907081211904')
  });
})

})

context('Flask Dashboard page - Footer', () => {
  beforeEach(() => {
    cy.visit("https://flask.io")
  })

  it ('Check for the footer section' , () => {
    cy.get('footer')
    .should('be.visible')
  })

  it ('Check for the footer container' , () => {
    cy.get('footer > .container')
    .should('be.visible')
  })

  it ('Check for the "About" button' , () => {
    cy.get('[href="/about"]')
    .should('be.visible')
    .click()

  })

  it ('Check for the "Developers" button' , () => {
    cy.get('[href="/about#api"]')
    .should('be.visible')
    .click
  })

  it ('Check for the "Suggest a feature" button' , () => {
    cy.get('[href="https://flask.uservoice.com/"]')
    .should('be.visible')
    .click()
  })

  it ('Check for the "Suggest a feature" button URL' , () => {
    cy.get('[href="https://flask.uservoice.com/"]')
  .invoke('attr', 'href')
  .then(href => {
    expect(href).to.equal('https://flask.uservoice.com/')
  });
})

it ('Open "Buy Me A Coffe" button', () => {
  cy.get('.bmc-button > span')
  .should('be.visible')
  .click()
})

it ('Cookies notification' , () => {
  cy.get('.cookies-eu-content-holder')
  .should('be.visible')
})

it ('Cookies notification-click on "OK"', () => {
  cy.get('.cookies-eu-ok')
  .should('be.visible')
  .click()
})

})
