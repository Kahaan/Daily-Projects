class User < ApplicationRecord

  validates :email, presence: true, uniqueness: true
  validates :security_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true


  


end
