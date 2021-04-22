
  FlowRouter.route('/app/:email', {
    name: 'app',
    async action() {
      await import('../imports/ui/App');
      BlazeLayout.render('home', {main: 'app'});
    }
  }); 
  
  FlowRouter.route('/signup', {
    name: 'signup',
    async action() {
      await import('../imports/ui/Signup');
      BlazeLayout.render('home', {main: 'signup'});
    }
  }); 
  
  FlowRouter.route('/login', {
    name: 'login',
    async action() {
      await import('../imports/ui/Login');
      BlazeLayout.render('home', {main: 'login'});
    }
  }); 
  
  FlowRouter.route('/', {
    name: 'index',
    async action() {
      await import('../imports/ui/index');
      BlazeLayout.render('home',{main:'index'});
    }
  }); 
  