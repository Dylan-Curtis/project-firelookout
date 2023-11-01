# Lookout Trails

## Connect with other Fire Lookout enthusiests



## Git Clone

To get started, make sure you have set up your WSL2 or Mac environment.

1. Click on "Fork" button to create a copy of the repository in your GitHub account.

   ![ForkBtn](https://www.earthdatascience.org/images/earth-analytics/git-version-control/githubguides-bootcamp-fork.png)

2. Click on "Create Fork" to confirm the creation of your forked repository.

   ![CreateFork](https://github.com/jccaropino7786/legendary-phase1-project/blob/main/images%20and%20gifs/create%20fork.PNG?raw=true)

   *If it doesn't redirect to your own forked repository:*
   - Click on your own profile (top right).
   - Click on "Your repositories".
   - Click on "project-firelookout".

3. Click on "<> Code" and select "SSH" from the drop-down menu.

   ![CodeDropdown](https://github.com/Dylan-Curtis/MLB-Connect/assets/115842668/f17c3ed5-c4b5-40a9-83db-87c239ffac1e)

4. Copy the SSH link to your clipboard.

5. Open your terminal and navigate to the desired location where you want to clone the repository.

6. Type the following command in the terminal:

   ```
   git clone [paste the SSH link here]
   ```

   Then press Enter/Return.

7. Type `ls` to check if the "project-firelookout" folder is present.

8. Change directory to the "project-firelookout" folder using the following command:

   ```
   cd project-firelookout
   ```

   Now you are inside the "project-firelookout" folder!

9. Open Visual Studio Code by typing `code .` in the terminal.

   Your Visual Studio Code should open with the project.

In order to run the application locally, we need to start the local server.

1. Inside the terminal in Visual Studio Code, run the following commands one by one:

   ```
   bundle install
   rake db:migrate
   rake db:seed
   ```

   These commands will install the necessary dependencies, migrate the database, and seed it with initial data.

2. This application has two important folders: the main folder (where you currently are) and the client folder. While still inside the main folder, run the command:

   ```
   rails s
   ```

   This will start the Rails server. Then, open an additional terminal in Visual Studio Code and navigate to the client folder.

3. After you have navigated to the client folder, run the command:

   ```
   npm start
   ```



## Demo
Here is how the app should look:

![Demo gif]([https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjg2NzkyOTMxMWExNzgyZDFiOGE1NTdmZTlhYTEwN2I0Mjg5MTlkNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/P3H6X3MFMxp1LT6XoA/giphy.gif](https://www.linkedin.com/feed/update/urn:li:activity:7125186811835940865/))


Copyright (c) [2023] [Dylan Curtis]
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
