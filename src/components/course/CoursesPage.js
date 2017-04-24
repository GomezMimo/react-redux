import React, {PropTypes, Component} from 'react';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {
        title: null
      }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  render() {
    return(
      <div>
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
      </div>
    );
  }
}

export default CoursesPage;
