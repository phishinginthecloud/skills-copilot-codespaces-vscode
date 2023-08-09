function skillsMember() {
  var member = {
    name: 'John Doe',
    skills: ['html', 'css', 'js'],
    age: 30,
    showSkills: function () {
      this.skills.forEach(function (skill) {
        console.log(this.name + ' knows ' + skill);
      }.bind(this));
    }
  };

  member.showSkills();
}