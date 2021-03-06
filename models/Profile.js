const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  gym: {
    type: String
  },
  belt: {
    type: String
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  experience: [
    {
      name: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      place: {
        type: String
      }
    }
  ],
  education: [
    {
      gym: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      website: {
        type: String
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
