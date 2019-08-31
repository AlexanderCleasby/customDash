# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'
require 'fileutils'

namespace :start do
    task :development do
        Dir.chdir('client') do
            sh %{yarn start}
        end
    end

end
task start: 'start:development'
Rails.application.load_tasks
