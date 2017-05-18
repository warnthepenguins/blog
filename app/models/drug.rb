class Drug < ApplicationRecord

  validates :name_main, presence: true, uniqueness: {case_sensitive: false}

  def self.search (search)
    self.where(['name_main LIKE ? OR names_code LIKE ? OR names_brand LIKE ? OR names_generic LIKE ? OR mechanisms_molecular LIKE ?',
        '%' + search + '%',
        '%' + search + '%',
        '%' + search + '%',
        '%' + search + '%',
        '%' + search + '%'])
  end

end
