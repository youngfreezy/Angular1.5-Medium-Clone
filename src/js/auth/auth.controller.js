class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }

  submitForm() {
    this.isSubmitting = true;
    console.log(this);
    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        this._$state.go('app.home');
        console.log(res);
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
        console.log(err.data.errors);
      }
    )
  }
}

export default AuthCtrl;
