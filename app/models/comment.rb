class Comment < ApplicationRecord
  belongs_to :article
  validates :commenter, presence: true,
                    length: { in: 2..40 }
  validates :body, presence: true,
                    length: { in: 2..1200 }
end
