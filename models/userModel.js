const mongoose = require('mongoose'),
 Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    hash_password: String,
    created: {
        type: Date,
        default: Date.now
    },
    template: [],
    resume: {
        info: {
          name: String,
          email: String,
          dob: Date,
          address: String,
          profession: String,
          phone: Number
        },
        da: {
          expertise: String,
          programming_languages: String,
          tools: String,
          technical_electives: String
        },
        degree: [
          {
            name: String,
            institute: String,
            year: Number,
            score: Number
          }
        ],
        skill: [
          {
            name: String,
          }
        ],
        internship: [
          {
            name: String,
            description: String,
            start: Date,
            end: Date,
            team_size: Number,
            guide: String
          }
        ],
        project: [
            {
                name: String,
                description: String,
                start: Date,
                end: Date,
                team_size: Number,
                guide: String
            }
        ],
        position: [
          {
            name: String
          }
        ],
        award: [
            {
                name: String
            }
        ],
        hobby: [
            {
                name: String
            }
        ]
      }
});

module.exports = mongoose.model('UserModel', UserSchema);