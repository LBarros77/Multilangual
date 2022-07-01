import React, {Component} from 'react';
import axios from 'axios';
import i18next from 'i18next';

class Posts extends Component {
  state = {};
  quantities = [];
  placeholder = 'gdg';

  componentDidMount() {
    axios.get('posts')
    .then(response => {
      const posts = response.data;
      this.setState({posts});
    })
  }

  handleChange(post_id, event) {
    this.quantities[post_id] = event.target.value;
  }

  handleClick(post_id) {
    axios.post('poests/' + post_id, {
      quantity: this.quantities[post_id]
    }).then(response => {
      const res = response.data;
      console.log(res);
    }).catch(error => {
      const res = error.response.data;
      alert(i18next.t(res.message));
    })
  }

  render() {
    const posts = this.state.posts;

    if(posts) return (
      posts.map(post => {
        const img = require("./images/" + post.image);
        return (
          <div className="row mb-4">
            <div className="col-4">
                <img src={img} className="img-fluid" />
            </div>
            <div className="col-8">
              <h2>{post.title}</h2>
              <p>{post.description}</p>

              <div className="row">
                <div className="col-8"></div>
                <div className="input-group col-4">
                  <input className="form-control blog-input" onChange={event => this.handleClick(post.id, event)} />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secundary" type="button" onClick={() => this.handleClick(post.id)}>{i18next.t('buy')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    )
    return 'No Posts';
  }
}

export default Posts;