const mongoose = require('mongoose');
const User = require('./models/UserModel'); // Make sure to adjust the path to your User model
const Rank = require('./models/RankModel');
const Student = require('./models/StudentModel');
const Essay = require('./models/EssayModel');
const Professional = require('./Models/ProfessionalModel');

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phoneNumber: 1234567890,
        birthDate: new Date("1990-01-01"),
        joinDate: new Date("2020-01-01"),
        sex: "M",
        password: "password123",
        profilePicture: "path/to/profilePic1.jpg",
        isPro: false
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: 2345678901,
        birthDate: new Date("1985-05-15"),
        joinDate: new Date("2019-05-15"),
        sex: "F",
        password: "password456",
        profilePicture: "path/to/profilePic2.jpg",
        isPro: false
    },
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        phoneNumber: 3456789012,
        birthDate: new Date("1992-07-20"),
        joinDate: new Date("2021-07-20"),
        sex: "F",
        password: "password789",
        profilePicture: "path/to/profilePic3.jpg",
        isPro: true
    },
    {
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        phoneNumber: 4567890123,
        birthDate: new Date("1988-11-30"),
        joinDate: new Date("2018-11-30"),
        sex: "M",
        password: "password101",
        profilePicture: "path/to/profilePic4.jpg",
        isPro: false
    },
    {
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        phoneNumber: 5678901234,
        birthDate: new Date("1995-03-25"),
        joinDate: new Date("2022-03-25"),
        sex: "M",
        password: "password202",
        profilePicture: "path/to/profilePic5.jpg",
        isPro: false
    }
];

const ranksData = [
    {
        name: "Rank 1",
        description: "Beginner level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 1", type: "Cardio", duration: 30, date: new Date() },
            { name: "Exercise 2", type: "Strength", duration: 45, date: new Date() }
        ]
    },
    {
        name: "Rank 2",
        description: "Intermediate level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 3", type: "Flexibility", duration: 20, date: new Date() },
            { name: "Exercise 4", type: "Endurance", duration: 60, date: new Date() }
        ]
    },
    {
        name: "Rank 3",
        description: "Advanced level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 5", type: "Agility", duration: 40, date: new Date() },
            { name: "Exercise 6", type: "Power", duration: 55, date: new Date() }
        ]
    },
    {
        name: "Rank 4",
        description: "Expert level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 7", type: "Balance", duration: 25, date: new Date() },
            { name: "Exercise 8", type: "Coordination", duration: 50, date: new Date() }
        ]
    },
    {
        name: "Rank 5",
        description: "Master level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 9", type: "Core", duration: 35, date: new Date() },
            { name: "Exercise 10", type: "Plyometrics", duration: 70, date: new Date() }
        ]
    },
    {
        name: "Rank 6",
        description: "Elite level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 11", type: "Speed", duration: 45, date: new Date() },
            { name: "Exercise 12", type: "Accuracy", duration: 60, date: new Date() }
        ]
    },
    {
        name: "Rank 7",
        description: "Champion level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 13", type: "Recovery", duration: 20, date: new Date() },
            { name: "Exercise 14", type: "Mental", duration: 45, date: new Date() }
        ]
    },
    {
        name: "Rank 8",
        description: "Legendary level",
        img: "/path/to/img",
        exercises: [
            { name: "Exercise 15", type: "Explosiveness", duration: 30, date: new Date() },
            { name: "Exercise 16", type: "Focus", duration: 60, date: new Date() }
        ]
    }
];

const studentsData = [
    {
        user: "665212b08826ea28ba424ea7",
        rank: "6652151aec3ddb58a17e3675",
        finishedExercises: 159,
        hoursSpent: 24,
        exercisesFocus: {
            exercisesData: [
                { exerciseType: "Cardio", exerciseValue: 30 },
                { exerciseType: "Strength", exerciseValue: 45 },
                { exerciseType: "Bulk", exerciseValue: 20 },
                { exerciseType: "PushUps", exerciseValue: 59 },
                { exerciseType: "PullUps", exerciseValue: 70 },
            ]
        },
        activityFocus: {
            activityData: [
                { activityYear: 2023, activityMonth: 11, activityValue: 20 },
                { activityYear: 2023, activityMonth: 12, activityValue: 25 },
                { activityYear: 2024, activityMonth: 1, activityValue: 30 },
                { activityYear: 2024, activityMonth: 2, activityValue: 13 },
                { activityYear: 2024, activityMonth: 3, activityValue: 10 },
                { activityYear: 2024, activityMonth: 4, activityValue: 17 },
                { activityYear: 2024, activityMonth: 5, activityValue: 23 },
                { activityYear: 2024, activityMonth: 6, activityValue: 44 },
            ]
        },
        professionalId: "665212b08826ea28ba424ea7",
        progress: {
            progressData: [
                {
                    rank: "6652151aec3ddb58a17e3675",
                    progressSubData: [
                        { exercise: 1, completed: true },
                        { exercise: 2, completed: false }
                    ]
                }
            ]
        }
    }
];

const essay = [{
    student: "66536927801e903d05158001",
    rank: "66526404ac1ff77e0419e27a",
    exercise: "66526404ac1ff77e0419e27c",
    duration: 435,
    date: Date.now(),
    content: "1716933378935-videoplayback.mp4"
}];

const professional = [{
    user: "66568a98ab181f5ffb5c79b3",
    patientsList: [],
    analysedRecord: 10,
    newRecord: 19,
    liveSession: 2,
    essayToReview: "",
    reviewedEssay: ""
}];


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/TALKEASE', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Insert sample users into the database
        return Professional.insertMany(professional);
    })
    .then(() => {
        console.log('Sample users inserted successfully');
        // Close the connection
        return mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting sample users:', err);
    });
