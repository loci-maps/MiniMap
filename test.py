import pickle

# Open the pickle file in binary mode
with open('data/LinkageLabels2.pkl', 'rb') as file:
    # Load the object from the file
    data = pickle.load(file)

# Now you can work with the loaded data
# For example, print the content of the object
print(data)
