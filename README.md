# Merge Time Ranges — Node.js Assignment

This project solves the **Merge Discontinuous Time Ranges** challenge.  
The task is to take multiple time ranges `[start, end)` and merge them if they overlap or if the gap between them is within the given threshold. The result must be sorted and contain only non-overlapping ranges.

---

## 🧠 Problem Summary

Systems often log activity in fragments. Some fragments overlap, some have a tiny gap in between. If the gap is small enough, it should still count as continuous activity.

This module:

- Sorts all time ranges
- Merges overlapping ones
- Also merges those separated by a gap less than or equal to the threshold
- Returns a clean, continuous list of activity ranges

---

## 📌 Key Features

- Handles overlapping and near-overlapping ranges
- Flexible threshold for allowed gaps
- Returns sorted, simplified time intervals
- Clear, readable logic designed for maintainability

---

## 📂 What’s Inside


---

## 🧪 Testing

A small test file is included so you can quickly verify the output with example inputs and thresholds.

Run the test with: node test.js


---

## ✅ Expected Output Example

Given a set of ranges and a threshold, the module returns a shorter, merged set of intervals that represent actual continuous activity.
<img width="678" height="107" alt="image" src="https://github.com/user-attachments/assets/de451273-16d2-48ce-9765-83091c497b4d" />


---

## ✨ Why This Approach Works

The solution focuses on clarity and correctness.  
It avoids unnecessary complexity, making it easy for any developer to understand, maintain, or extend.

---
