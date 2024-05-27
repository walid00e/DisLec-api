const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Embedded ActivityFocus Schema
const activityUnitSchema = new Schema({
    activityYear: { type: Number, required: true },
    activityMonth: { type: Number, required: true },
    activityValue: { type: Number, required: true }
});

const activityFocusSchema = new Schema({
    activityData: [activityUnitSchema]
});

// Embedded ExerciseFocus Schema
const exerciseUnitSchema = new Schema({
    exerciseType: { type: String, required: true },
    exerciseValue: { type: Number, required: true }
});

const exerciseFocusSchema = new Schema({
    exercisesData: [exerciseUnitSchema]
});

// Embedded Progress Schema
const progressSubUnitSchema = new Schema({
    exercise: { type: Number, required: true },
    completed: { type: Boolean, required: true }
});

const progressUnitSchema = new Schema({
    rank: { type: Schema.Types.ObjectId, ref: 'Rank' },
    progressSubData: [progressSubUnitSchema]
});

const progressSchema = new Schema({
    progressData: [progressUnitSchema]
});

// Student Schema with Embedded Data
const studentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rank: { type: Schema.Types.ObjectId, ref: 'Rank' },
    finishedExercises: { type: Number, default: 0 },
    hoursSpent: { type: Number, default: 0 },
    exercisesFocus: exerciseFocusSchema,
    activityFocus: activityFocusSchema,
    professionalId: { type: Schema.Types.ObjectId, ref: 'Professional' },
    progress: progressSchema
});

module.exports = mongoose.model('Student', studentSchema);

