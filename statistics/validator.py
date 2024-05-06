from sklearn.metrics import precision_score, recall_score, f1_score

import matplotlib.pyplot as plt

# Index 1 = Gold Label, Index 2 = Testing results

with open("./testing-results.txt", "r") as f:
    results = f.readlines()

results = [list(map(str.strip, result.split("-"))) for result in results]

guesses = []
gold_label = []

for result in results:
    guesses.append(int(result[2]))
    gold_label.append(int(result[1]))

# Calculating metrics
precision = precision_score(gold_label, guesses, average='macro')
recall = recall_score(gold_label, guesses, average='macro')
f1 = f1_score(gold_label, guesses, average='macro')

# Printing metrics
print(f"Precision: {precision}")
print(f"Recall: {recall}")
print(f"F1 Score: {f1}")

# Plotting
metrics = ['Precision', 'Recall', 'F1 Score']
values = [precision, recall, f1]

plt.figure(figsize=(8, 4))
plt.bar(metrics, values, color=['blue', 'green', 'red'])
plt.xlabel('Metrics')
plt.ylabel('Values')
plt.title('Performance Metrics')
plt.ylim(0, 1)  # Assuming the values are between 0 and 1
plt.show()
