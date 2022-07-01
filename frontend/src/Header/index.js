import React, {Component} from "react";

class Header extends Component {

  change(option) {
    localStorage.setItem('lang', option.target.value);
    window.location.reload();
  }

  render() {
    const lang = localStorage.getItem('lang') || 'en';
    return (
      <nav className="container my-4">
        <div className="row">
          <div className="col-10">
            <div className="col-2">
              <select className="custon-select pull-right" onChange={this.change} value={lang}>
                <option value='en'>English</option>
                <option value='de'>Deutsh</option>
                <option value='pt'>Portugues</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;