# Bash Shell Scripting

This module provides a collection of hands-on bash scripting exercises covering fundamentals through practical AWS automation scripts. Students work through progressively more complex examples.

## What This Module Covers

- Variables, constants, and environment variables
- Reading user input with `read`
- Positional parameters and special variables
- Conditional logic: `if`, `if-else`, `if-elif-else`
- Loops: `for` loops and `while` loops
- Bash aliases for productivity
- Practical scripts: EC2 instance provisioning, backup scheduling, and monitoring

## Prerequisites

- A Linux or macOS terminal (or WSL on Windows)
- AWS CLI installed and configured (for the EC2 and backup scripts)
- Basic familiarity with the command line

See [../../PREREQUISITES.md](../../PREREQUISITES.md) for install instructions.

## Step-by-Step Instructions

1. **Start with the basics.** Read through `bash_variables.txt` to understand how variables, environment variables, and special variables work in bash.

2. **Run simple scripts.** Begin with `bash_example_one.sh`:
   ```bash
   chmod +x bash_example_one.sh
   ./bash_example_one.sh
   ```

3. **Practice variables and arguments.** Work through these scripts in order:
   - `bash_variable.sh` -- passing arguments to set variables
   - `bash_variable_command.sh` -- capturing command output in variables
   - `bash_read_prompt.sh` -- reading user input with prompts
   - `bash_positional_param_two.sh` -- understanding `$0`, `$1`, `$2`, `$3`

4. **Learn conditional logic.** Run and study each script:
   - `bash_if.sh` -- basic if-then-else
   - `bash_if_else.sh` -- if-else with string comparison
   - `bash_if_elif_else.sh` -- multi-branch conditionals
   - `bash_check_age.sh` -- combining `read` input with if-elif-else

5. **Work with loops.** Run and modify:
   - `bash_for_loops.sh` -- iterating over a list of strings
   - `bash_for_loops_two.sh` -- renaming files in a directory using a for loop
   - `bash_while_loop.sh` -- counting with a while loop

6. **Set up aliases.** Review `150-bash_aliases.txt` and add useful aliases to your `~/.bashrc`.

7. **Explore AWS automation scripts.** These require AWS CLI credentials:
   - `ec2-instance.sh` -- launches an EC2 instance, waits for it to run, and SSHs in to configure it
   - `back-up-schedule.sh` -- creates AMI backups of an EC2 instance and deletes old ones
   - `ec2_monitor-metrics.sh` -- monitors CPU and memory usage and sends email alerts

   Update the placeholder values (instance IDs, key pair names, etc.) before running.

## Project Structure

```
Bash_Shell_Scripting/
├── README.md
├── 150-bash_aliases.txt          # Useful bash alias examples
├── back-up-schedule.sh           # EC2 AMI backup with retention policy
├── bash_check_age.sh             # Age checker using read + if-elif-else
├── bash_example_one.sh           # Hello world script
├── bash_example_two.py           # Python placeholder file
├── bash_for_loops.sh             # For loop over a string list
├── bash_for_loops_two.sh         # For loop to rename files
├── bash_if.sh                    # Basic if-then-else
├── bash_if_elif_else.sh          # If-elif-else example
├── bash_if_else.sh               # If-else example
├── bash_positional__parameter.sh # Positional parameters (empty)
├── bash_positional_param_two.sh  # Positional parameters with $0-$3
├── bash_read_prompt.sh           # Reading user input with read -p
├── bash_variable.sh              # Variables from arguments
├── bash_variable_command.sh      # Command substitution in variables
├── bash_variables.txt            # Reference guide for bash variables
├── bash_while_loop.sh            # While loop counter
├── ec2-instance.sh               # Launch and configure an EC2 instance
└── ec2_monitor-metrics.sh        # CPU/memory monitoring with alerts
```
