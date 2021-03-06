import * as Handlebars from '../node_modules/handlebars/dist/handlebars'

export const listBundles = Handlebars.compile(`
<div class="panel panel-default">
  <div class="panel-heading">Your Bundles</div>
  {{#if bundles.length}}
    <table class="table">
      <tr>
        <th>Bundle Name</th>
        <th>Actions</th>
      </tr>
      {{#each bundles}}
      <tr>
        <td>
          <a href="#view-bundle/{{id}}">{{name}}</a>
        </td>
        <td>
          <button class="btn btn-default delete" data-bundle-id="{{id}}">Delete</button>
        </td>
      </tr>
      {{/each}}
    </table>
  {{else}}
    <div class="panel-body">
      <p>None yet!</p>
    </div>
  {{/if}}
</div>
`)

export const addBundleForm = Handlebars.compile(`
<div class="panel panel-default">
  <div class="panel-heading">
    Create a new bundle.
  </div>
  <div class="panel-body">
    <form action="">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Bundle Name">
          <span class="input-group-btn">
            <button class="btn btn-primary" type="submit">Create</button>
          </span>
      </div>
    </form>
  </div>
</div>
`)

export const main = Handlebars.compile(`
<div class="container-fluid">
{{#if session.auth}}
  <div class="collapse navbar-collapse">
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#list-bundles">My Bundles</a></li>
      <li><a href="/auth/signout">Sign Out</a></li>
    </ul>
  </div><!-- /.navbar-collapse -->
{{/if}} 
  <h1>B4 - Book Bundler</h1>
  <div class="b4-alerts"></div> 
  <div class="b4-main"></div>
  
</div>
`)

export const welcome = Handlebars.compile(`
<div class="jumbotron">
  <h1>Welcome!</h1>
  <p>B4 is an application for creating book bundles.</p>
  {{#if session.auth}}
    <p>View your <a href="#list-bundles">bundles</a>.</p>
  {{else}}
    <p>Sign in with any of these services to begin.</p>
    <div class="row">
      <div class="col-sm-6">
        <a href="/auth/facebook" class="btn btn-block btn-social btn-facebook">
          Sign in with Facebook
          <span class="fa fa-facebook"></span>
        </a>
        <a href="/auth/twitter" class="btn btn-block btn-social btn-twitter">
          Sign in with Twitter
          <span class="fa fa-twitter"></span>
        </a>
        <a href="/auth/google" class="btn btn-block btn-social btn-google">
          Sign in with Google
          <span class="fa fa-google"></span>
        </a>
      </div>
    </div>
  {{/if}}  
</div>
`)

export const alert = Handlebars.compile(`
<div class="alert alert-{{type}} alert-dismissable fade in" role="alert">
  <button class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span> 
  </button>
  {{message}}
</div>
`)