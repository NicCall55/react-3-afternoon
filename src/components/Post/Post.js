<div className="Post__content">
  {
    editing
    ?
      <Edit text={ text }
            id={ id } // Remember to destructure id off of props or use this.props.id
            hideEdit={ this.hideEdit }
            updatePostFn={ updatePostFn } />
    :
      <span className="Post__text">{ text }</span>
  }
</div>