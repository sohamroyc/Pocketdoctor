const mongoose = require('mongoose');

const uri = "mongodb+srv://sohamroychowdhury2004:8bVYknmwK2h2eXTb@cluster0.5qmywpz.mongodb.net/pocketdoctor?retryWrites=true&w=majority";

async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected Successfully!');
        
        // Create a simple test document
        const testSchema = new mongoose.Schema({
            name: String,
            date: { type: Date, default: Date.now }
        });
        
        const Test = mongoose.model('Test', testSchema);
        
        // Create a test document
        await Test.create({ name: 'Test Connection' });
        console.log('Test document created successfully!');
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
}

connectDB(); 