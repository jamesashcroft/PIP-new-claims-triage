const express = require('express')
const router = express.Router()
// const radioButtonRedirect = require('radio-button-redirect')
// router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line

// current sprint 26 // *****************************************************************************************************************
//Create query preparing food activity
// router.post('/current/activities/preparing-food', (req, res, next) => {
router.post('/current/activities/preparing-food', (req, res, next) => {
  console.log('/current/activities/preparing-food', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-preparing-food')
})

router.post('/current/set-action/set-action-preparing-food', (req, res, next) => {
  console.log('this is preparing food')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].contentQ = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/activities/preparing-food')
})

//Create query taking nutrition activity
router.post('/current/activities/taking-nutrition', (req, res, next) => {
  console.log('/current/activities/taking-nutrition', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-taking-nutrition')
})

router.post('/current/set-action/set-action-taking-nutrition', (req, res, next) => {
  console.log('this is taking nutrition')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query managing therapy activity
router.post('/current/activities/managing-therapy', (req, res, next) => {
  console.log('/current/activities/managing-therapy', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-managing-therapy')
})

router.post('/current/set-action/set-action-managing-therapy', (req, res, next) => {
  console.log('this is managing therapy')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query washing and bathing activity
router.post('/current/activities/washing-and-bathing', (req, res, next) => {
  console.log('/current/activities/washing-and-bathing', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-washing-and-bathing')
})

router.post('/current/set-action/set-action-washing-and-bathing', (req, res, next) => {
  console.log('this is washing and bathing')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query managing toilet needs activity
router.post('/current/activities/managing-toilet-needs', (req, res, next) => {
  console.log('/current/activities/managing-toilet-needs', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-managing-toilet-needs')
})

router.post('/current/set-action/set-action-managing-toilet-needs', (req, res, next) => {
  console.log('this is managing toilet needs')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query dressing and undressing activity
router.post('/current/activities/dressing-and-undressing', (req, res, next) => {
  console.log('/current/activities/dressing-and-undressing', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-dressing-and-undressing')
})

router.post('/current/set-action/set-action-dressing-and-undressing', (req, res, next) => {
  console.log('this is dressing and undressing')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query communicating verbally activity
router.post('/current/activities/communicating-verbally', (req, res, next) => {
  console.log('/current/activities/communicating-verbally', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-communicating-verbally')
})

router.post('/current/set-action/set-action-communicating-verbally', (req, res, next) => {
  console.log('this is communicating verbally')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query reading and understanding activity
router.post('/current/activities/reading-and-understanding', (req, res, next) => {
  console.log('/current/activities/reading-and-understanding', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-reading-and-understanding')
})

router.post('/current/set-action/set-action-reading-and-understanding', (req, res, next) => {
  console.log('this is reading and understanding')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query engaging face to face activity
router.post('/current/activities/engaging-face-to-face', (req, res, next) => {
  console.log('/current/activities/engaging-face-to-face', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-engage-face-to-face')
})

router.post('/current/set-action/set-action-engage-face-to-face', (req, res, next) => {
  console.log('this is engaging face to face')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query budgeting activity
router.post('/current/activities/budgeting', (req, res, next) => {
  console.log('/current/activities/budgeting', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-budgeting')
})

router.post('/current/set-action/set-action-budgeting', (req, res, next) => {
  console.log('this is budgeting')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query planning and following journeys activity
router.post('/current/activities/planning-and-following-journeys', (req, res, next) => {
  console.log('/current/activities/planning-and-following-journeys', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-planning-and-following-journeys')
})

router.post('/current/set-action/set-action-planning-and-following-journeys', (req, res, next) => {
  console.log('this is planning and following journeys')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//Create query moving around activity
router.post('/current/activities/moving-around', (req, res, next) => {
  console.log('/current/activities/moving-around', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source
  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/current/set-action/set-action-moving-around')
})

router.post('/current/set-action/set-action-moving-around', (req, res, next) => {
  console.log('this is moving around')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].content = req.session.data['query-content']
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/task-list')
})

//**************************************************************************************************************************************
//Routes for queries linked to Evidence

router.post('/current/evidence-detail', (req, res, next) => {
    if (req.session.data['tagging-evidence'] == "evidence-query" ) {
      console.log('/current/evidence-detail', req.session.data)
      const name = req.session.data['evidence-query']
      const section = req.session.data.source

      const queriesEvidence = req.session.data.queriesEvidence || []
      queriesEvidence.push({ name, section })
      req.session.data.queriesEvidence = queriesEvidence
      res.redirect('/current/set-action/set-action-evidence')

  } else {

    //Routes for tagged documents linked to Evidence
        console.log('/current/evidence-detail', req.session.data)
        const name = req.session.data['evidence-query']
        const pageURL = req.session.data['page-URL'][1]['contact-claimant-page']
        console.log(pageURL)
        const section = req.session.data.source

        const conditionsEvidence = req.session.data.conditionsEvidence || []
        conditionsEvidence.push({ name, section, pageURL })
        req.session.data.conditionsEvidence = conditionsEvidence
        res.redirect('/current/tagging')
    }
    })

    router.post('/current/tagging', (req, res, next) => {
      console.log('this is evidence')
      console.log(req.session.data)
      req.session.data.conditionsEvidence[req.session.data.conditionsEvidence.length - 1].evidence = req.session.data['evidence-query']
      req.session.data.conditionsEvidence[req.session.data.conditionsEvidence.length - 1].action = req.session.data['conditions']
      req.session.data.conditionsEvidence[req.session.data.conditionsEvidence.length - 1].page = req.session.data['page-URL'][1]['contact-claimant-page']
      console.log(1, req.session.data.conditionsEvidence)
      res.redirect('/current/evidence-detail')
    })

// follow up route for linking queries to evidence
router.post('/current/set-action/set-action-evidence', (req, res, next) => {
  console.log('this is evidence')
  console.log(req.session.data)
  req.session.data.queriesEvidence[req.session.data.queriesEvidence.length - 1].evidence = req.session.data['evidence-query']
  req.session.data.queriesEvidence[req.session.data.queriesEvidence.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/current/evidence-detail')
})

//Routes for tagged documents linked to Evidence
// router.post('/current/evidence-detail', (req, res, next) => {
//     console.log('/current/evidence-detail', req.session.data)
//     const name = req.session.data['evidence-query']
//     const section = req.session.data.source
//
//     const conditionsEvidence = req.session.data.conditionsEvidence || []
//     conditionsEvidence.push({ name, section })
//     req.session.data.conditionsEvidence = conditionsEvidence
//     res.redirect('/current/current/tagging')
//
// })
//
// router.post('/current/tagging', (req, res, next) => {
//   console.log('this is evidence')
//   console.log(req.session.data)
//   req.session.data.queriesEvidence[req.session.data.queriesEvidence.length - 1].evidence = req.session.data['evidence-query']
//   req.session.data.queriesEvidence[req.session.data.queriesEvidence.length - 1].action = req.session.data['conditions']
//   console.log(1, req.session.data)
//   res.redirect('/current/evidence-detail')
// })


// sprint 24 and 25 // *****************************************************************************************************************
router.post('/sprint-24-25/queries/create-query', (req, res, next) => {
  console.log('/sprint-24-25/queries/create-query', req.session.data)
  const name = req.session.data['query-content']
  const section = req.session.data.source

  const queries = req.session.data.queries || []
  queries.push({ name, section })
  req.session.data.queries = queries
  res.redirect('/sprint-24-25/set-action/set-action-preparing-food')
})

router.post('/sprint-24-25/set-action/set-action-preparing-food', (req, res, next) => {
  console.log('this is preparing food')
  console.log(req.session.data)
  req.session.data.queries[req.session.data.queries.length - 1].action = req.session.data['set-an-action']
  console.log(1, req.session.data)
  res.redirect('/sprint-24-25/task-list')
})

// GET SPRINT NAME - useful for relative templates
// router.use('/', (req, res, next) => {
//   req.folder = req.originalUrl.split('/')[1];
//   req.subfolder = req.originalUrl.split('/')[2];
//   res.locals.currentURL = req.originalUrl;
//   res.locals.prevURL = req.get('Referrer');
//   res.locals.folder = req.folder;
//   res.locals.subfolder = req.subfolder;
//   res.locals.name = req.query.n
//   res.locals.unallocated = req.query.ua
//
//   console.log('folder : ' + res.locals.folder + ', subfolder : ' + res.locals.subfolder  );
//   console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
//   next();
// });

// Start folder specific routes
router.use('/sprint-24-25', require('./views/sprint-24-25/_routes'));
// current sprint, remember to add older sprint when adding a new folder!
router.use('/current', require('./views/current/_routes'));

module.exports = router
//router.all('/current/check-router', function(req, res, next){
//  var testQ = req.session.data['query-content']

/*var preparingFood = "";
  if (req.session.data['query-content'] && req.session.data['query-content'] == "true") {
    //preparingFood = "query-content"; // quick way to append apointee journey to relevant screens
    console.log(preparingFood);
  }
});*/

/*router.all('/current/query-check', function(req, res) {
  if (req.session.data['query-content'] && req.session.data['query-content'] == "true") {
    //preparingFood = "query-content"; // quick way to append apointee journey to relevant screens
    console.log(preparingFood);
  }
});*/
/*function checkButton() {
if(document.getElementById('A').checked) {
      document.getElementById("disp").innerHTML
          = "A";
  }
  else if(document.getElementById('B').checked) {
      document.getElementById("disp").innerHTML
          = "B";
  }
*/
//});
