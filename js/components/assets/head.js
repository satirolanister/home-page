const head = {
    template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img src="media/img/145859.png" width="70" height="70" class="navbar-brand rounded-circle" alt="" loading="lazy"> 
    <button class="navbar-toggler btn btn-primary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <router-link class="nav-link" to="/">home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">about</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/content">content</router-link>
        </li>
      </ul>
    </div>
  </nav>
    `
};

export default head;
