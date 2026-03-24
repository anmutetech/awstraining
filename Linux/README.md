# Linux -- Basic File Operations

This module provides sample files for practicing fundamental Linux commands such as file viewing, editing, copying, moving, and working with basic HTML.

## What This Module Covers

- Viewing and editing text files from the command line
- Basic HTML file structure
- Common Linux file manipulation commands

## Prerequisites

- A Linux terminal (native Linux, macOS terminal, or WSL)
- A text editor (vim, nano, or similar)

See [../PREREQUISITES.md](../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

1. **View the text file** using different commands:
   ```bash
   cat test.txt
   less test.txt
   head test.txt
   ```

2. **View the HTML file:**
   ```bash
   cat index.html
   ```

3. **Practice editing files** with a terminal editor:
   ```bash
   nano index.html
   ```
   - Change the title text in `<title>` to your own name
   - Modify the paragraph content in the `<body>`
   - Save and exit

4. **Practice common file operations:**
   ```bash
   # Copy a file
   cp test.txt test_backup.txt

   # Move/rename a file
   mv test_backup.txt renamed.txt

   # Create a new directory and move the file into it
   mkdir backups
   mv renamed.txt backups/

   # View directory contents
   ls -la backups/

   # Remove the file and directory
   rm backups/renamed.txt
   rmdir backups
   ```

5. **Open the HTML file in a browser** to see the rendered page:
   ```bash
   open index.html        # macOS
   xdg-open index.html    # Linux
   ```

## Project Structure

```
Linux/
├── README.md
├── index.html    # Sample HTML page for editing practice
└── test.txt      # Simple text file for command-line exercises
```
