const { User, Thought} = require('../models');

module.exports = {
  
  async getUsers(req, res) {
    
    try {
      console.log(User)
      const users = await User.find()
      res.json(users);
    }
    catch (err)
    {
      console.error(err);
      res.status(500).json(err);
    }


    //Course.find()
    //  .then((courses) => res.json(courses))
    //  .catch((err) => res.status(500).json(err));
  },
  
  async getSingleUser(req, res) {

    try {
      const user = await User.findOne({_id: req.params.userId});
      res.json(user);
    }
    catch (err)
    {
      console.log(err);
      res.status(500).json(err);
    }

    /*
    Course.findOne({ _id: req.params.courseId })
      .select('-__v')
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
      */
  },
  
  async createUser(req, res) {
    try {
      console.log(req.body)
      const user = await User.create(req.body);
      
      res.json(user);
    }
    catch (err)
    {
      res.status(500).json(err);
    }
  },
  
  async deleteUser(req, res) {

    try {
      const user = await User.deleteOne({_id:req.params.userId});
      res.json({message:"User Deleted"});
    }
    catch (err)
    {
      console.log(err);
      res.status(500).json(err);
    }

    /*
    Course.findOneAndDelete({ _id: req.params.courseId })
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with that ID' })
          : Student.deleteMany({ _id: { $in: course.students } })
      )
      .then(() => res.json({ message: 'Course and students deleted!' }))
      .catch((err) => res.status(500).json(err));
      */
  },
  // Update a course
  async updateUser(req, res) {
    try {

      

      const user = await User.updateOne({_id:req.params.userId},req.body);
      res.json(user);
    }
    catch (err)
    {
      res.status(500).json(err);
    }

    /*
    Course.findOneAndUpdate(
      { _id: req.params.courseId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((course) =>
        !course
          ? res.status(404).json({ message: 'No course with this id!' })
          : res.json(course)
      )
      .catch((err) => res.status(500).json(err));
      */
  },
};
