# Knowledge-base

## homebrew

brew install nodenv
nodenv allows you to manage node versions per project by using .node-version file that list the version to use

```bash
# example located at
~/.node-version
```

To install a new version of node that you have listed in the file go to the directory that has the file and run the following command in the terminal

```bash
nodenv install $(cat .node-version)
```

## Terminal Commands(iTerm2)

To navigate in a directory use

```bash
cd ./<that_folders_name>
```

To navigate out use

```bash
cd ..
```

To show folders and file that don’t have a . In the name run

```bash
ls
```

To show folders and file that have a . In the beginning run

```bash
ls -a
```

To make a new folder from the cli run

```bash
mkdir <folder_name>

#example
mkdir some-nice-ass-folder
```

To create a new file run

```bash
touch <file_name>.<extension>

#example
touch CoolFile.js
```
