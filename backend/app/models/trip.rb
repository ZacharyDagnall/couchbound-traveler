class Trip < ApplicationRecord
  belongs_to :passport
  belongs_to :city
end
