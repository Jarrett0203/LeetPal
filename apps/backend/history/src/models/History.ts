import mongoose, { Document, Schema } from "mongoose";

interface CompletedQuestion extends Document {
  questionId: string;
  answer: string;
  result: string;
  completedAt: Date;
}

interface History extends Document {
  userIds: number[];
  sessionId: string;
  completed: CompletedQuestion[];
  date: Date;
}

const completedQuestionSchema = new Schema({
  questionId: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    enum: ["correct", "incorrect"],
    required: true,
  },
  completedAt: {
    type: Date,
    required: true,
    default: () => Date.now(),
  },
});

const historySchema = new Schema({
  userIds: {
    type: [{
        type: Number,
      }],
    required: true,
  },
  sessionId: {
    type: String,
    required: true,
      
  },
  completed: {
    type: [completedQuestionSchema],
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: () => Date.now(),
  },
});

const HistoryModel = mongoose.model("History", historySchema);

export default HistoryModel;
